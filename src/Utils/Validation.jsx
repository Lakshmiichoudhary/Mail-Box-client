
const validation = (email,password,confirmPassword,isSignUp) => {
    if (!email || !password) {
        return "Email and password are required";
    }

    if (isSignUp && !confirmPassword) {
        return "Confirm password is required";
    }

    const isemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ispassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)

    if(!isemail) return "Enter Valid Email"

    if(!ispassword) return "Password require atleast 1 upper and lower letter,number and special character"

    if(isSignUp && password !== confirmPassword) return "password do not match"

    return null


}

export default validation