import loading from 'assets/loading.gif';

function Loading() {
  return (
    <div className="loading">
      <div className="loading-gif">
        <img src={loading} alt="loading" />
      </div>
      <p>Please wait a moment</p>
    </div>
  );
}

export default Loading;
