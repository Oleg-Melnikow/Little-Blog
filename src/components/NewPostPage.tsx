import React, {ChangeEvent} from 'react'
import {FormControl, FormGroup, TextField, Button, Grid} from '@material-ui/core'
import {useForm} from "react-hook-form";


type NewPostPagePropsType = {
    addNewPost: (post: FormType) => void
}

export type FormType = {
    title: string,
    description: string
}


export const NewPostPage = (props: NewPostPagePropsType) => {

    const {register, handleSubmit, setValue, formState: {errors}, reset} = useForm<FormType>({
        defaultValues: {
            title: "",
            description: ""
        },
        mode: "all"
    });

    const onSubmit = (data: FormType) => {
        props.addNewPost(data);
        reset({
            title: "",
            description: ""
        });
    }

    function handlerChangeTitle(e: ChangeEvent<HTMLInputElement>) {
        setValue("title", e.currentTarget.value);
    }

    function handlerChangeDescription(e: ChangeEvent<HTMLInputElement>) {
        setValue("description", e.currentTarget.value);
    }

    return <Grid container justify="center">
        <Grid item xs={"auto"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl style={{padding: "50px"}}>
                    <FormGroup>
                        <TextField style={{minWidth: "400px"}}
                                   fullWidth
                                   type="text"
                                   label="Title"
                                   variant="outlined"
                                   margin="normal"
                                   {...register('title', {
                                       required: 'Title is required',
                                       minLength: {
                                           value: 10,
                                           message: 'Must be more than 10 characters'
                                       }
                                   })}
                                   onChange={handlerChangeTitle}
                                   error={Boolean(errors?.title)}
                                   helperText={errors?.title?.message}
                        />
                        <TextField
                            multiline
                            variant="outlined"
                            label="Description"
                            margin="normal"
                            {...register('description', {
                                required: 'Description is required',
                                minLength: {
                                    value: 5,
                                    message: 'Must be more than 10 characters'
                                }
                            })}
                            onChange={handlerChangeDescription}
                            error={Boolean(errors?.description)}
                            helperText={errors?.description?.message}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Add post</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}
