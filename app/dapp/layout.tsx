import Dappnav from "@/src/components/dappnav";

export default function DappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed left-0 right-0 z-50">
        <Dappnav />
      </div>

      {/* Push content below fixed navbar */}
      <div>{children}</div>
    </>
  );
}
