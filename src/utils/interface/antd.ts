// antd相关ts接口定义
interface AntdLayoutInterface {
    labelCol?: AntdSizeInterface;
    wrapperCol?: AntdSizeInterface;
}

interface AntdSizeInterface {
    span?: number;
    offset?: number;
}

export type { AntdLayoutInterface, AntdSizeInterface };
