import React, { useState } from 'react';
import "../css/App.css";
import { Howl } from 'howler';

function App() {
  const [power, setPower] = useState(2);
  const [toughness, setToughness] = useState(2);
  const [hexproof, setHexproof] = useState(false);
  const [flying, setFlying] = useState(false);
  const [indestructible, setIndestructible] = useState(false);
  const [unblockable, setUnblockable] = useState(false);
  const [firstStrike, setFirstStrike] = useState(false);
  const [doubleStrike, setDoubleStrike] = useState(false);
  const [vigilance, setVigilance] = useState(false);
  const [lifelink, setLifelink] = useState(false);
  const [haste, setHaste] = useState(false);
  const [protectionFromCreatures, setProtectionFromCreatures] = useState(false);
  const [protectionFromAllColors, setProtectionFromAllColors] = useState(false);
  const [protectionFromBlackAndGreen, setProtectionFromBlackAndGreen] = useState(false);
  const [nonbasicLandwalk, setNonbasicLandwalk] = useState(false);
  const [totemArmor, setTotemArmor] = useState(false);

  const howl = new Howl({
    src: "https://soundbible.com/mp3/Click2-Sebastian-759472264.mp3",
    html5: true
  });

  const onPowerPlus = () => {
    setPower((t) => t + 1);
    howl.play();
  };

  const onPowerMinus = () => {
    setPower((t) => t - 1);
    howl.play();
  };

  const onToughnessPlus = () => {
    setToughness((t) => t + 1);
    howl.play();
  };

  const onToughnessMinus = () => {
    setToughness((t) => t - 1);
    howl.play();
  };

  const toggleHexproof = () => {
    setHexproof((t) => !t);
    howl.play();
  };

  const toggleFlying = () => {
    setFlying((t) => !t);
    howl.play();
  };

  const toggleIndestructible = () => {
    setIndestructible((t) => !t);
    howl.play();
  };

  const toggleUnblockable = () => {
    setUnblockable((t) => !t);
    howl.play();
  };

  const toggleFirstStrike = () => {
    setFirstStrike((t) => !t);
    howl.play();
  };

  const toggleDoubleStrike = () => {
    setDoubleStrike((t) => !t);
    howl.play();
  };

  const toggleVigilance = () => {
    setVigilance((t) => !t);
    howl.play();
  };

  const toggleLifelink = () => {
    setLifelink((t) => !t);
    howl.play();
  };

  const toggleHaste = () => {
    setHaste((t) => !t);
    howl.play();
  };

  const toggleProtectionFromCreatures = () => {
    setProtectionFromCreatures((t) => !t);
    howl.play();
  };

  const toggleProtectionFromAllColors = () => {
    setProtectionFromAllColors((t) => !t);
    howl.play();
  };

  const toggleProtectionFromBlackAndGreen = () => {
    setProtectionFromBlackAndGreen((t) => !t);
    howl.play();
  };

  const toggleNonbasicLandwalk = () => {
    setNonbasicLandwalk((t) => !t);
    howl.play();
  };

  const toggleTotemArmor = () => {
    setTotemArmor((t) => !t);
    howl.play();
  };

  return (
    <div>
      <div className="flexbox">
        <div className={"box"} style={{background: hexproof ? "white" : "grey"}} onClick={toggleHexproof}>Hexproof</div>
        <div className={"box"} style={{background: flying ? "white" : "grey"}} onClick={toggleFlying}>Flying</div>
        <div className={"box"} style={{background: indestructible ? "white" : "grey"}} onClick={toggleIndestructible}>Indestructible</div>
        <div className={"box"} style={{background: unblockable ? "white" : "grey"}} onClick={toggleUnblockable}>Unblockable</div>
        <div className={"box"} style={{background: firstStrike ? "white" : "grey"}} onClick={toggleFirstStrike}>First strike</div>
        <div className={"box"} style={{background: doubleStrike ? "white" : "grey"}} onClick={toggleDoubleStrike}>Double strike</div>
        <div className={"box"} style={{background: vigilance ? "white" : "grey"}} onClick={toggleVigilance}>Vigilance</div>
        <div className={"box"} style={{background: lifelink ? "white" : "grey"}} onClick={toggleLifelink}>Lifelink</div>
        <div className={"box"} style={{background: haste ? "white" : "grey"}} onClick={toggleHaste}>Haste</div>
        <div className={"box"} style={{background: protectionFromCreatures ? "white" : "grey"}} onClick={toggleProtectionFromCreatures}>Protection from creatures</div>
        <div className={"box"} style={{background: protectionFromAllColors ? "white" : "grey"}} onClick={toggleProtectionFromAllColors}>Protection from all colors</div>
        <div className={"box"} style={{background: protectionFromBlackAndGreen ? "white" : "grey"}} onClick={toggleProtectionFromBlackAndGreen}>Protection from black/green</div>
        <div className={"box"} style={{background: nonbasicLandwalk ? "white" : "grey"}} onClick={toggleNonbasicLandwalk}>Nonbasic landwalk</div>
        <div className={"box"} style={{background: totemArmor ? "white" : "grey"}} onClick={toggleTotemArmor}>Totem armor</div>
        <div className={"lifebox"}>
          <div className={"power-box"}>
            <div className={"plus-power"} onClick={onPowerPlus} />
            <div className={"minus-power"} onClick={onPowerMinus} />
          </div>
          <div className={"power"}>{power}</div>
          <div className={"separator"}>/</div>
          <div className={"toughness"}>{toughness}</div>
          <div className={"power-box"}>
            <div className={"plus-toughness"} onClick={onToughnessPlus} />
            <div className={"minus-toughness"} onClick={onToughnessMinus} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;