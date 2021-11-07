export default function Page({ children }) {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
		.page {
			background: #ffa52a;
			display: flex;
			font-size: 16px;
			justify-content: center;
			color: #fff;
			padding: 10px;
		}
		`,
        }}
      />
      <div className="page text-center bg-red-300">Header</div>
      <div className="m-10">{children}</div>
    </div>
  );
}
