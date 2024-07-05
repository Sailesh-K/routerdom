import React from "react";
import Card from "./Card";

function Datasc(){
    return(
    <>
    <h2>Data Science</h2>
    <div className="card-section">
        <Card title="Data Analytics Using Pandas"/>
        <Card title="Machine Learning 101"/>
        <Card title="R Programming"/>
    </div>
    </>
);
}

export default Datasc;