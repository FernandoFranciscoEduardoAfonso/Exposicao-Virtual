import bcrypt from 'bcrypt';

export const isCorrectPassword = async (passwordLogin: string, passwordDb: string) => {
    if (await bcrypt.compare(passwordLogin, passwordDb)) {
        return true
    } else {
        return false
    }
}

export const hashPassword = async (password: string) => {
    const saltRounds = await bcrypt.genSalt(10); // o saltRounds indica o peso do hash, quanto maior o peso mais seguro será a senha, e mais recursos de hardware vai usar
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

