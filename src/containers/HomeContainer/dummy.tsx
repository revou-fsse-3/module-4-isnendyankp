{
  /* Step 1: Personal information = FullName, Email Address, Date of birth */
}
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
      {formMik.errors.fullname && <Text>{formMik.errors.fullname}</Text>}
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
    <Button
      label={'Previous'}
      onClick={handlePrevious}
      type={'button'}
      className={'bg-green-500'}
    />
    <Button
      label={'Next'}
      onClick={handleNext}
      type={'button'}
      className={'bg-green-500'}
    />
  </form>
</Card>;
