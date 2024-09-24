import { FormEvent } from 'react';

import { Account, Server } from '@/types';

import styles from '@/styles/account.module.scss';

import { generateServerName } from '../../utils.ts';

interface Props {
    addAccount: (account: Account) => void;
    servers?: Server[];
}

type CustomHTMLFormElement = FormEvent<HTMLFormElement> & {
    target: { name: HTMLInputElement; server: HTMLInputElement };
};

const AddAccount = ({ addAccount, servers }: Props) => {
    const handleSubmit = (e: CustomHTMLFormElement) => {
        e.preventDefault();
        addAccount({
            server: servers?.find(({ id }) => id === e.target.server.value)!,
            name: e.target.name.value,
        });
    };

    return servers ? (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Lisää uusi tili</h2>
            <div className={styles.inputRow}>
                <label htmlFor='server'>Maailma</label>
                <select id='server' name='server'>
                    {servers.map((server) => (
                        <option key={server.id} value={server.id}>
                            {generateServerName(server)}
                        </option>
                    ))}
                </select>
            </div>
            <div className={styles.inputRow}>
                <label htmlFor='name'>Nimi</label>
                <input type='text' id='name' name='name' />
            </div>
            <button type='submit'>Lisää tili</button>
        </form>
    ) : (
        <span>Ladataan..</span>
    );
};

export default AddAccount;
