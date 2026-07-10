export default async function CourseDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="text-5xl flex items-center justify-center">
      <h1>{slug}</h1>
    </div>
  );
}
