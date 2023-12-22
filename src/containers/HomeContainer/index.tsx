import { Input, Text, Button, Card } from "../../components"
import { useFormik } from "formik";
import * as yup from 'yup';

const HomeContainer = () => {

    interface FormProps {
        fullname: string;
        email: string;
        date: string;
        alamat: string;
        kota: string;
        negara: string;
        kodepos: string;
        username: string;
        password: string;
    }

    const formMik = useFormik({
      initialValues: {
        fullname: '',
        email: '',
        date: '',
        alamat: '',
        kota: '',
        negara: '',
        kodepos: '',
        username: '',
        password: '',
      },
      onSubmit: (values: FormProps) => console.log(values),
      validationSchema: yup.object({
        fullname: yup.string().required('Nama tidak boleh kosong'),
        email: yup.string().required('Email tidak boleh kosong'),
        date: yup.string().required('Tanggal lahir tidak boleh kosong'),
        alamat: yup.string().required('Alamat tidak boleh kosong'),
        kota: yup.string().required('Kota tidak boleh kosong'),
        negara: yup.string().required('Negara tidak boleh kosong'),
        kodepos: yup.string().required('Kodepos tidak boleh kosong'),
        username: yup.string().required('Username tidak boleh kosong'),
        password: yup.string().required('Password tidak boleh kosong'),
      }),
    });
        console.log(formMik);
        return (
          <Card border={false} className=" ">
            {/* Step 1: Personal information = FullName, Email Address, Date of birth */}
            <Card border>
              <form onSubmit={formMik.handleSubmit}>
                <p>Personal Information</p>
                {/* Input FullName */}
                <div className="m-1">
                  <Text>{'FullName'}</Text>
                  <Input
                    className="block border-emerald-700 border"
                    name={'nama'}
                    value={formMik.values.fullname}
                    onChange={formMik.handleChange('fullname')}
                  />
                  {/* add error validation text with yup for input nama */}
                  {formMik.errors.fullname && (
                    <Text>{formMik.errors.fullname}</Text>
                  )}
                </div>
                {/* Input Email address */}
                <div className="m-1">
                  <Text>{'Email Address'}</Text>
                  <Input
                    className="block border-emerald-700 border"
                    name={'email'}
                    value={formMik.values.email}
                    onChange={formMik.handleChange('email')}
                  />
                  {/* add error validation text with yup for input umur */}
                  {formMik.errors.email && <Text>{formMik.errors.email}</Text>}
                </div>
                {/* Input Date of birth */}
                <div className="m-1">
                  <Text>{'Date of birth'}</Text>
                  <Input
                    className="block border-emerald-700 border"
                    name={'date'}
                    value={formMik.values.date}
                    onChange={formMik.handleChange('date')}
                  />
                  {/* add error validation text with yup for input hobi */}
                  {formMik.errors.date && <Text>{formMik.errors.date}</Text>}
                </div>
                {/* Button previous */}
                <Button
                  label={'Previous'}
                  type={'submit'}
                  className={'bg-green-500'}
                />
                {/* Button Next */}
                <Button
                  label={'Next'}
                  type={'submit'}
                  className={'bg-green-500'}
                />
              </form>
            </Card>

            {/* Step 2 Address Information for Street Address, City, State, Zip Code */}
            <Card border>
              <form onSubmit={formMik.handleSubmit}>
                <p>Address Information</p>
                {/* Input Street Address */}
                <div className="m-1">
                  <Text>{'Street Address'}</Text>
                  <Input
                    className="block border-emerald-700 border"
                    name={'alamat'}
                    value={formMik.values.alamat}
                    onChange={formMik.handleChange('alamat')}
                  />
                  {/* add error validation text with yup for input nama */}
                  {formMik.errors.alamat && (
                    <Text>{formMik.errors.alamat}</Text>
                  )}
                </div>
                {/* Input City */}
                <div className="m-1">
                  <Text>{'City'}</Text>
                  <Input
                    className="block border-emerald-700 border"
                    name={'kota'}
                    value={formMik.values.kota}
                    onChange={formMik.handleChange('kota')}
                  />
                  {/* add error validation text with yup for input umur */}
                  {formMik.errors.kota && <Text>{formMik.errors.kota}</Text>}
                </div>
                {/* Input state */}
                <div className="m-1">
                  <Text>{'State'}</Text>
                  <Input
                    className="block border-emerald-700 border"
                    name={'negara'}
                    value={formMik.values.negara}
                    onChange={formMik.handleChange('negara')}
                  />
                  {/* add error validation text with yup for input hobi */}
                  {formMik.errors.negara && (
                    <Text>{formMik.errors.negara}</Text>
                  )}
                </div>
                {/* Input Zip Code */}
                <div className="m-1">
                  <Text>{'Zip Code'}</Text>
                  <Input
                    className="block border-emerald-700 border"
                    name={'kodepos'}
                    value={formMik.values.kodepos}
                    onChange={formMik.handleChange('kodepos')}
                  />
                  {/* add error validation text with yup for input hobi */}
                  {formMik.errors.kodepos && (
                    <Text>{formMik.errors.kodepos}</Text>
                  )}
                </div>
                {/* Button previous */}
                <Button
                  label={'Previous'}
                  type={'submit'}
                  className={'bg-green-500'}
                />
                {/* Button Next */}
                <Button
                  label={'Next'}
                  type={'submit'}
                  className={'bg-green-500'}
                />
              </form>
            </Card>

            {/* Step 3  Account Information = Username & Password */}
            <Card border>
              <form onSubmit={formMik.handleSubmit}>
                {/* Input Username */}
                <div className="m-1">
                  <Text>{'Username'}</Text>
                  <Input
                    className="block border-emerald-700 border"
                    name={'username'}
                    value={formMik.values.username}
                    onChange={formMik.handleChange('username')}
                  />
                  {/* add error validation text with yup for input nama */}
                  {formMik.errors.username && (
                    <Text>{formMik.errors.username}</Text>
                  )}
                </div>
                {/* Input Password */}
                <div className="m-1">
                  <Text>{'Password'}</Text>
                  <Input
                    className="block border-emerald-700 border"
                    name={'password'}
                    value={formMik.values.password}
                    onChange={formMik.handleChange('password')}
                  />
                  {/* add error validation text with yup for input umur */}
                  {formMik.errors.password && (
                    <Text>{formMik.errors.password}</Text>
                  )}
                </div>
                {/* Button previous */}
                <Button
                  label={'Previous'}
                  type={'submit'}
                  className={'bg-green-500'}
                />
                {/* Button Submit */}
                <Button
                  label={'Submit'}
                  type={'submit'}
                  className={'bg-green-500'}
                />
              </form>
            </Card>
          </Card>
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
// 33. render with pass in Card component with border props & value true to add border to Card component & wrap all element inside Card component with Card component
// 34. add styling margin with tailwind code m-1 to div element