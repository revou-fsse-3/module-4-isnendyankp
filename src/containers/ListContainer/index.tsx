// /*
//   create code using react, typescript, tailwindcss, formik, yup validation, crud, for  list page. here task for page list:
//   1. Category: 
//   - see list category with API: https://mock-api.arikmpt.com/api/category?page=1&name=mock category
//   - save category with API: https://mock-api.arikmpt.com/api/category?page=1&name=mock category
//   - update category with API: https://mock-api.arikmpt.com/api/category/update 
//   - delete category with API https://mock-api.arikmpt.com/api/category/34506582-54ef-4997-ad9b-1d05b716023c

//   2. All category must be have validation
// */

// import { useEffect, useState } from 'react';
// import { useFormik } from 'formik';
// import axios from 'axios';
// import * as yup from 'yup';
// import { Input, Button} from '../../components';

// // Form validation with yup
// const formValidationSchema = yup.object({
//   name: yup.string().required('Category name is required'),
//   // add more validation rules here
// });

// // Category component
// const ListContainer = () => {

//   // State for categories
//   // const [categories, setCategories] = useState([]);

//   // Get categories on component load
//   useEffect(() => {
//     getCategories();
//   }, []);

//   // Get categories from API
//   async function getCategories() {
//     try {
//       const response = await axios.get(
//         'https://mock-api.arikmpt.com/api/category?page=1&name=mock category'
//       );
//       setCategories(response.data);
//     } catch (error) {
//       console.error('Error getting categories', error);
//     }
//   }

//   // // Delete category by id
//   // async function deleteCategory() {
//   //   try {
//   //     await axios.delete(`https://mock-api.arikmpt.com/api/category/34506582-54ef-4997-ad9b-1d05b716023c`);
//   //     getCategories(); // refresh categories after one is deleted
//   //   } catch (error) {
//   //     console.error('Error deleting category', error);
//   //   }
//   // }
  

//   // Formik setup for add/update category
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//     },

//     // validation for category name
//     validationSchema: formValidationSchema,

//     // onSubmit function for list category
//     onSubmit: async (values, actions) => {
//       const { name } = values;
//       try {
//         if (name) {
//           await axios.get('https://mock-api.arikmpt.com/api/category', {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('token')}`,
//             },
//           });
//         } else {
//           await axios.put(
//             'https://mock-api.arikmpt.com/api/category/update',
//             values
//           );
//         }
//         actions.resetForm();
//         getCategories(); // refresh categories after one is added/updated
//       } catch (error) {
//         console.error('Error saving category', error);
//       }
//     },
//   });

//   // Render component
//   return (
//     <div>

//       <h1>Categories</h1>

//       {/* Add/Update Category form */}
//       <form onSubmit={formik.handleSubmit}>
//         <Input
//           id="name"
//           name="name"
//           type="text"
//           onChange={formik.handleChange}
//           value={formik.values.name}
//         />
//         {formik.errors.name ? <div>{formik.errors.name}</div> : null}
//         <Button type="submit">Save Category</Button>
//       </form>

//       {/* Category list */}
//       {/* {categories.map((category) => (
//         <div key={category.id}>
//           <p>Name: {category.name}</p>
//             <Button label="Delete" onClick={() => deleteCategory(category.id)}>Delete</Button>
//         </div>
//       ))} */}
//     </div>
//   );
// };

// export default ListContainer;



