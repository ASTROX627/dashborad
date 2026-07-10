export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex items-center justify-center text-5xl">
      <h1>{slug}</h1>
    </div>
  );
}
