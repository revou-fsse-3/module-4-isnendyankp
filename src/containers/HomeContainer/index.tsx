import { Input, Text, Button, Card } from "../../components"
import { useFormik } from "formik";
import * as yup from 'yup';

const HomeContainer = () => {

    interface FormProps {
        nama: string;
        umur: string;
        hobi: string;
    }

    const formMik = useFormik({
      initialValues: {
        nama: '',
        umur: '',
        hobi: '',
      },
      onSubmit: (values: FormProps) => console.log(values),
      validationSchema: yup.object({
        nama: yup.string().required('Nama tidak boleh kosong'),
        umur: yup.string().required('Umur jangan lupa diisi ya'),
        hobi: yup.string().required('Hobi nya apa nih?')
      }),
    });
        console.log(formMik);
        return (
          <>
            <form onSubmit={formMik.handleSubmit}>
              {/* Input Nama */}
              <div>
                <Text>{'Nama'}</Text>
                <Input
                  className="block border-neutral-400 border"
                  name={'nama'}
                  value={formMik.values.nama}
                  onChange={formMik.handleChange('nama')}
                />
                {/* add error validation text with yup for input nama */}
                {formMik.errors.nama && <Text>{formMik.errors.nama}</Text>}
              </div>
              {/* Input Umur */}
              <div>
                <Text>{'Umur'}</Text>
                <Input
                  className="block border-neutral-400 border"
                  name={'umur'}
                  value={formMik.values.umur}
                  onChange={formMik.handleChange('umur')}
                />
                {/* add error validation text with yup for input umur */}
                {formMik.errors.umur && <Text>{formMik.errors.umur}</Text>}
              </div>
              {/* Input Hobi */}
              <div>
                <Text>{'Hobi'}</Text>
                <Input
                  className="block border-neutral-400 border"
                  name={'hobi'}
                  value={formMik.values.hobi}
                  onChange={formMik.handleChange('hobi')}
                />
                {/* add error validation text with yup for input hobi */}
                {formMik.errors.hobi && <Text>{formMik.errors.hobi}</Text>}
              </div>
              {/* Button Submit */}
              <Button
                label={'Submit'}
                type={'submit'}
                className={'bg-green-500'}
              />
            </form>
          </>
        );
}

export default HomeContainer

// Progress:
// 1. cr8 HomeContainer component
// 2. import input component
// 3. render with pass in input component
// 4. Add className props to input component with value display block and border neutral 400
// 5. Add value border same as border-width: 1px from tailwind
// 6. import Text component and render it with children props Home Container
// 7. pass in children props to Text component with value Nama
// 8. Add new text & input element to div element and wrap it with react fragment for umur & hobi
// 9. import Button component
// 10. render with pass in Button component with label props & value Submit
// 11. Add type submit because @Button component interface has extended ButtonHTMLAttributes<HTMLButtonElement> from react
// 12. Add tailwind bg-green-500 to button element with className props
// 13. import Form from formik
// 14. warp all input, text, button element with Form component inside Formik component
// 15. fix import from formik with add Formik to Formik component
// 16. Add initialValues props to Formik component with value nama, umur, hobi & empty string value & onSubmit props with value console.log(values)
// 17. Connecting input with initialValues props with add name props to input component with value nama, umur, hobi(like  name={'nama'}, name={'umur'}, name={'hobi'})
// 18. cr8 formMik with useFormik hook from formik
// 19. pass in initialValues props to useFormik hook with value nama, umur, hobi & empty string value & onSubmit props with value console.log(values)
// 20. add value props to input component to get value after input text with value formMik.values.nama, formMik.values.umur, formMik.values.hobi
// 21. add onChange props to input component with value formMik.handleChange('nama'), formMik.handleChange('umur'), formMik.handleChange('hobi') to add return value from input text
// 22. add values onSubmit @formMik>onSubmit props
// 23. add handleSubmit props to form element with onSubmit={formMik.handleSubmit}
// 24. import yup validation
// 25. add validationSchema props to useFormik hook with yup.object({nama: yup.string().required()})
// 26. add error validation text with yup for input nama
// 27. add change text error validation at nama input @validationSchema>nama
// 28. add validationSchema for umur & hobi including error validation text
// 29. cr8 interface FormProps with nama, umur, hobi props with type string
// 30. add FormProps type to onSubmit props with type FormProps
// 31. add console.log(formMik) to check formMik
// 32. import Card component