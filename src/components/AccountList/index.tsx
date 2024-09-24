import { Account } from '@/types';

interface Props {
    accounts: Account[];
}

const AccountList = ({ accounts }: Props) => {
    return <span>{accounts.length}</span>;
};

export default AccountList;
