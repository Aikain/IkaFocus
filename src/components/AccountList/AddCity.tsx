import type { SubmitEventHandler } from 'react';

import type { City, Island, LuxuryResource } from '@/types';

import styles from '@/styles/account.module.scss';

interface Props {
    addCity: (island: Pick<Island, 'x' | 'y' | 'luxuryResource'>, city: City) => void;
}

const AddCity = ({ addCity }: Props) => {
    const handleSubmit: SubmitEventHandler<
        HTMLFormElement & {
            target: {
                x: HTMLInputElement;
                y: HTMLInputElement;
                luxuryResource: HTMLInputElement;
                cityName: HTMLInputElement;
            };
        }
    > = (e) => {
        e.preventDefault();
        addCity(
            {
                luxuryResource: e.target.luxuryResource.value as LuxuryResource,
                x: parseInt(e.target.x.value),
                y: parseInt(e.target.y.value),
            },
            {
                luxuryResource: e.target.luxuryResource.value as LuxuryResource,
                name: e.target.cityName.value,
            },
        );
    };

    return (
        <form className={styles.addIsland} onSubmit={handleSubmit}>
            <input type='number' id='x' name='x' placeholder='XX' min={1} max={99} required />
            <input type='number' id='y' name='y' placeholder='YY' min={1} max={99} required />
            <select id='luxuryResource' name='luxuryResource'>
                <option value='WINE'>Viini</option>
                <option value='MARBLE'>Marmori</option>
                <option value='CRYSTAL'>Kristalli</option>
                <option value='SULPHUR'>Rikki</option>
            </select>
            <input type='text' id='cityName' name='cityName' placeholder='Kaupungin nimi' />
            <button type='submit'>Lisää kaupunki</button>
        </form>
    );
};

export default AddCity;
