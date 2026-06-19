"use client";

const error = ({  error,  unstable_retry }: { error: Error; unstable_retry: () => void; }) => {
  return (
    <div className="m-auto text-center">
      <h1>Error Occured {error?.message}</h1>
      <button onClick={() => unstable_retry()}>Retry</button>
    </div>
  );
};

export default error;
