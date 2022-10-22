import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

export const Form= ()=>{

    const schema = yup.object().shape({
        fullname: yup.string().required("This is a required Field"),
        email: yup.string().email().required(),
        phonenumber: yup.number().required(),
        password: yup.string().min(4).max(20).required(),
        confirmpassword : yup.string().oneOf([yup.ref("password"),null],"Passwords do not Match").required(),
    })

    const {register , handleSubmit ,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })


    const onSubmit = (data)=>{
        console.log(data);
    }
    return(
        <div style={{display:"flex", flexDirection:"column", width:"200px", marginLeft:"auto", marginRight:"auto", marginTop:"25vh"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Enter your name" {...register("fullname")}/>
                <p>{errors.fullname?.message}</p>
                <input type="text" placeholder="Enter your email" {...register("email")}/>
                <p>{errors.email?.message}</p>
                <input type="number" placeholder="Enter your phonenumber" {...register("phonenumber")} />
                <p>{errors.number?.message}</p>
                <input type="password" placeholder="Enter your password"  {...register("password")} />
                <p>{errors.password?.message}</p> 
                <input type="password" placeholder="Enter your password again" {...register("confirmpassword")} />
                <p>{errors.confirmpassword?.message}</p>
                <button >Submit Form</button>
            </form>
           
        </div>
    )
}