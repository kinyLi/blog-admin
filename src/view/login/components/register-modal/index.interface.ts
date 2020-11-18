interface RegisterModalPropsInterface {
    visible: boolean;
    changeIsShowRegister: () => void;
}

interface RegisterModalInputInterface {
    username: string;
    password: string;
}

export type { RegisterModalPropsInterface, RegisterModalInputInterface };
