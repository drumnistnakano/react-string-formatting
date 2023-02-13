import "./App.css";

function App() {
  const helperText = (
    <>
      あなたの名前は何ですか？
      <br />
      <b>yoshiyuki</b>です
    </>
  );

  const helperText2 = (
    <>
      あなたの名前は何ですか？
      <br />
      <div className="flex items-center inline-flex">
        <div className="text-lg">yoshiyuki</div>です
      </div>
    </>
  );

  return (
    <div className="text">
      <div className="whitespace-pre-line text-xs font-light">{`あなたの名前はなんですか？\n私の名前はnakanoだよ`}</div>
      <div className="whitespace-pre-line text-xs font-light">{helperText}</div>
      <div className="whitespace-pre-line text-xs font-light">
        {helperText2}
      </div>
    </div>
  );
}

export default App;
