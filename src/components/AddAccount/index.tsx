import { FormEvent } from 'react';

import { Account, Server } from '@/types';
import { generateServerName } from '@/utils';

import styles from '@/styles/account.module.scss';

interface Props {
    addAccount: (account: Pick<Account, 'name' | 'server'>) => void;
    servers: Server[];
}

type CustomHTMLFormElement = FormEvent<HTMLFormElement> & {
    target: { name: HTMLInputElement; server: HTMLInputElement };
};

const AddAccount = ({ addAccount, servers }: Props) => {
    const handleSubmit = (e: CustomHTMLFormElement) => {
        e.preventDefault();

        const server = servers.find(({ id }) => id === e.target.server.value);
        if (!server) return;

        addAccount({ name: e.target.name.value, server });
    };

    return servers ? (
        <form className={styles.addAccount} onSubmit={handleSubmit}>
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
