const TestLayout = ({ children }: { chilren: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div>This is a navbar</div>
      <hr />
      {children}
    </div>
  );
};

export default TestLayout;
