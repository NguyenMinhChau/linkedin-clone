const handleSignin = (email, password, auth, history, setErrorSignin) => {
    auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                history('/home');
            }
        })
        .catch(() => setErrorSignin('Tài khoản này không tồn tại'));
};

const handelJoinnow = (email, password, auth, history, setErrorRegister) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history('/home');
        })
        .catch(() => setErrorRegister(`Email ${email} này đã tồn tại`));
};
export { handelJoinnow, handleSignin };
