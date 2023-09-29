interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps): React.ReactElement {
  return (
    <div className="mx-auto p-4 text-white md:p-8 max-w-md md:max-w-xl lg:max-w-3xl h-screen bg-gradient-to-r from-purple-800 via-blue-800 to-green-800 overflow-scroll">
      {children}
    </div>
  );
}

export default Container;
