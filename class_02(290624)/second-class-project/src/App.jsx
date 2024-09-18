
// import React from "react";
import './App.css'
import { Button } from "./Button/Button";
import Card from './Card/Card';

const App = () => {
  return (
    <>
    {/* <h1 className="hello">Hello Pakistan</h1>
    <Button /> */}
    <Card Title="vivo V29E 5G" description="RAM & ROM 8 GB + 256 GB" Image="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1697685970725/b814834cf5a7f64e55a185edde7fb421.png" />
    <Card Title="vivo V30 5G" description="RAM & ROM 12 GB + 256 GB" Image="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1708657153461/0470863fe17c260562cbb79bb7de1100.png" />
    <Card Title="vivo Y100 5G" description="RAM & ROM 8+ GB + 256 GB" Image="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1712112039807/55ac95a3bb24aac4da0a98f3c3236254.png" />
    </>
  )
}
export default App