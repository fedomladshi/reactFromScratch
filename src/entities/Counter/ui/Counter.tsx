import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const disaptch = useDispatch();
    const { t } = useTranslation('main');
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        disaptch(counterActions.increment());
    };

    const decrement = () => {
        disaptch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button onClick={increment} data-testid="increment-btn">
                {t('increment')}
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                {t('decrement')}
            </Button>
        </div>
    );
};
