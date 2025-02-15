import React,{ useState } from 'react'



export default function TextForm(props) {
    const[text, setText] = useState("Enter text here");
    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("success","The text is converted to lowerCase")
    }
    const handlelowclick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("success","The text is converted to lowerCase")
  }
  const handlecamelclick = () => {
    let newText = text.toLowerCase().split(" ");
    
    newText = newText.map((word, index) => {
        if (index !== 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
    });
  
    let newerText = newText.join(" ");

    setText(newerText);
    props.showAlert("success","The text is converted to camelCase")
};

    const handleonchange=(event)=>{
        setText(event.target.value)
    };

  return (
   

    <div>
      
      <div className="mb-3" style={{
                         color: ['dark', 'purple'].includes(props.mode) ? 'white' : 'black'
                    }} >
        <h1 >IT IS THE TEXT AREA</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="7"  style={{
                        backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} ></textarea>
      </div>
      <div>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleupclick}>Convert To Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handlelowclick}>Convert To Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handlecamelclick}>Convert To camel Case</button>
      </div>
        <div className="mx-2 my-3 border border-dark rounded " style={{ color: ['dark', 'purple'].includes(props.mode) ? 'white' : 'black'}} >
            <h1>Text summary</h1>
            <p>The number of Characters are : {text.length}</p>
            <p>The number of words are: {text.trim().split(/\s+/).filter(word => word.length > 0).length}</p>

            <div>
                <h2>PREVIEW</h2>
            <p>{text}</p>

            </div>
            
        </div>
    </div>
    
    
  );
}
