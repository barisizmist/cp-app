import { useRouter } from 'next/router';

const CategoryDetailPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Category: {category}</h1>
      <p>Details about the {category} category will go here.</p>
    </div>
  );
};

export default CategoryDetailPage;
