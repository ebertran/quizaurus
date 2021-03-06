import React, { Component } from "react";

import InputForm from "../inputForm/InputFormText";
import InputFormRadio from "../inputForm/InputFormRadio";
import InputFormArea from "../inputForm/InputFormArea";

const QuizPersonalData = (props) => 
<div>
<InputForm
type="text"
id="title"
placeholder="Enter title"
changeState={props.changeState}
/>
<InputForm
type="text"
id="author"
placeholder="Enter author"
changeState={props.changeState}
/>
<InputForm
type="text"
id="field"
placeholder="Enter field"
changeState={props.changeState}
/>
<InputForm
type="text"
id="tags"
placeholder="Enter tags (Use ';' to separte different tags)"
changeState={props.changeState}
/>
<InputFormArea
type="text"
id="description"
placeholder="Enter version"
changeState={props.changeState}
/>
<InputForm
type="text"
id="version"
placeholder="Enter version"
changeState={props.changeState}
/>
</div>

export default QuizPersonalData;