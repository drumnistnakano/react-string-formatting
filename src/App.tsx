import "./App.css";

function App() {
  const helperText = (
    <>
      あなたの名前は何ですか？
      <br />
      <b>yoshiyuki</b>です
    </>
  );

  return (
    <div className="text">
      <div className="whitespace-pre-line text-xs font-light">{`あなたの名前はなんですか？\n私の名前はnakanoだよ`}</div>
      <div className="whitespace-pre-line text-xs font-light">{helperText}</div>
    </div>
  );
}

export default App;
