import Button from '@/componets/Button';
import ProductData from '@/componets/ProductData';
import BackendLayout from '@/adminlayouts/BackendLayout';

import { Head } from '@inertiajs/react';

export default function Welcome() {
    const savedata=()=>{
        alert("data saved");
    }
    return (
      <BackendLayout navbar={true} footer sidebar={true}>
        <h1>Welcome to the Laravel React E-commerce Application</h1>
        <ProductData/>
        <Button style={""} onclick={savedata} text="Save data"/>
      </BackendLayout>
    );
}
