import { useDispatch, useNamespacedSelector } from '@xams-framework/dusk';
import model from 'src/index.model';


export default function App() {
    const state: any = useNamespacedSelector(model.namespace);
    const dispatch = useDispatch();
    return (
        <>
            <button
                onClick={() => {
                    dispatch(model.actions.add());
                }}
            >
                +1
            </button>

            <span style={{ padding: 12 }}>{state.value}</span>

            <button
                onClick={() => {
                    dispatch(model.actions.minus());
                }}
            >
                -1
            </button>

            <hr />

            <button
                disabled={state.loading}
                onClick={() => {
                    dispatch(model.commands.add())
                        .then((res: { code: number, data: string }) => {
                            alert(res.data);
                        });
                }}
            >
                async add
            </button>
        </>
    );
}
