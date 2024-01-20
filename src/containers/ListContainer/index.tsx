import React, { useEffect, useState } from 'react';
import { deleteCategory, getCategories } from '../../api/categoryApi';
import { CategoryData } from '../../interfaces/Category';
import { UpdateForm } from '../../components';

const ListContainer: React.FC = () => {
  const token = localStorage.getItem('token') ?? '';
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{
    id: string;
    name: string;
    is_active: boolean;
  } | null>(null);
  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories(token);
        setCategories(response.data.data);

        console.log('Dapet bang !');
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, [token, showUpdateForm]);

  const handleEdit = (
    category: CategoryData
  ) => {
    console.log(category);
    setShowUpdateForm(true);
    setSelectedCategory(category);
  };

  const handleUpdateSuccess = () => {
    setShowUpdateForm(false);
    setSelectedCategory(null);
  };

  const handleCancel = () => {
    // setShowCreateForm(false);
    setShowUpdateForm(false);
    setSelectedCategory(null);
  };

  const handleDelete = async (categoryId: string) => {
    try {
      await deleteCategory(categoryId, token);
      const updatedCategories = categories.filter(
        (category) => category.id !== categoryId
      );
      setCategories(updatedCategories);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {showUpdateForm ? (
      <UpdateForm
        onUpdateSuccess={handleUpdateSuccess}
        onCancel={handleCancel}
        category={selectedCategory!}
      />
      ) : (
      <>
        <h2 className="text-xl font-semibold text-center">Category List</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="border px-4 py-2">{category.id}</td>
                <td className="border px-4 py-2">{category.name}</td>
                <td className="border px-4 py-2">
                  {category.is_active ? 'Active' : 'Deactive'}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(category)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <td></td>
          </tbody>
        </table>
      </>
      )}
    </div>
  );
};

export default ListContainer;