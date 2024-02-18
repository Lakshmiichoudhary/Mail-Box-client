
const validation = (email,password,confirmPassword) => {
    if(!email || !password || !confirmPassword){
        return "all fields are required"
    }

    const isemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ispassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)

    if(!isemail) return "Enter Valid Email"

    if(!ispassword) return "Password require atleast 1 upper and lower letter,number and special character"

    if(password !== confirmPassword) return "password do not match"

    return null


}

export default validation