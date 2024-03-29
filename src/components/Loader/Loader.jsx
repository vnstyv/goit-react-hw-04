import { MagnifyingGlass } from 'react-loader-spinner';

export default function Loader() {
    return (
<MagnifyingGlass
            visible={true}
            height={80}
            width={80}
            ariaLabel='magnifying-glass-loading'
            wrapperStyle={{}}
            wrapperClassName='magnifying-glass-wrapper'
            glassColor='#ff0000'
            color='#00ff00'
            />
    );
}