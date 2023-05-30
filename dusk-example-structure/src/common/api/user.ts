import { ApiResponse } from '@xams-framework/common';
import { PasswordLoginCommand } from '@/common/api/command';
import { UserResource } from '@/common/api/resource';

export function passwordLogin(command: PasswordLoginCommand) {
    // 模拟接口调用,登录成功或者失败假设会返状态码200
    return new Promise<ApiResponse<UserResource | null>>((resolve) => {
        resolve(command.password !== 'root' ? {
            code: 1,
            success: false,
            message: '登录失败',
            notify: true,
            data: null,
            params: null,
        } : {
            code: 0,
            success: true,
            message: '登录成功',
            notify: true,
            data: {
                id: '1',
                code: 'zhang_san',
                name: '张三',
            },
            params: null,
        });
    });
}
