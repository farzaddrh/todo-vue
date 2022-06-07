<template>
    <li class="todo-item">
        <div @click="removeTodo" class="cross"></div>

        <input :checked='todo.done' type="checkbox" :id="todo.id" class="check-item" >

        <label @click.prevent="completingTodo" class="label" :for='todo.id'>{{ todo.todo }}</label>
    </li>
</template>

<script>
export default {
    props: ['todo'],

    methods: {
        completingTodo() {
            this.$store.dispatch('tDos/completingTodos', this.todo.id)
        },
        removeTodo() {
            this.$store.dispatch('tDos/remove', this.todo.id)
        }
    },
}
</script>

<style scoped lang="scss">
    .todo-item {
        position: relative;
        padding: 2rem;
        border-bottom: 1px solid hsl(233, 11%, 84%);

        &:hover .cross {
            display: block;
            height: 18px;
            width: 18px;
            position: absolute;
            right: 2rem;
            top: 50%;
            transform: translateY(-50%);
            background-image: url('./../assets/images/icon-cross.svg');
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            z-index: 100;
            cursor: pointer;
        }

        .check-item {
            display: none;
            border-radius: 50%;

            &:checked+label::after {
                background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                background-image: url('./../assets/images/icon-check.svg');
                background-repeat: no-repeat;
                background-size: auto;
                background-position: center center;

                }

            &:checked+label::before {
                background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));

                }

             &:checked+label {
                text-decoration: line-through;
                color: hsl(233, 11%, 84%);
                }

            &+label {
                z-index: 3;
                cursor: pointer;
                padding-left: 48px;
                display: block;
                position: relative;
                height: 20px;
                line-height: 1.7em;
                color: hsl(233, 14%, 35%);

                &::before {
                    z-index: 2;
                    top: 0px;
                    left: 2px;
                    width: 25px;
                    height: 25px;
                    display: block;
                    content: "";
                    position: absolute;
                    border-radius: 50%;
                    background: hsl(233, 11%, 84%);
                    }

                &:hover:before {
                    background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                    }

                &::after {
                    z-index: 2;
                    top: 2px;
                    left: 4px;
                    width: 21px;
                    height: 21px;
                    background: #fff;
                    display: block;
                    content: "";
                    position: absolute;
                    border-radius: 50%;
                    }


            }


        }

    }

/* ///////////////////dark mode//////////////// */

    .container.dark{
        .todo-item {
                        border-color: hsl(233, 14%, 35%);

                        .check-item {
                            &:checked+label::after {
                                background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                                background-image: url('./../assets/images/icon-check.svg');
                                background-repeat: no-repeat;
                                background-size: auto;
                                background-position: center center;
                            }

                            &:checked+label::before {
                                background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));

                            }

                            &:checked+label {
                                color: hsl(233, 14%, 35%);
                            }

                            &+label {
                                color: #b3b4c0;

                                    &::before {
                                        background: hsl(233, 14%, 35%);
                                        width: 25px;
                                        height: 25px;

                                    }

                                    &:hover:before {
                                        background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                                    }

                                    &:hover::after {
                                        width: 21px;
                                        height: 21px;
                                        top: 2px;
                                        left: 4px;

                                    }

                                    &::after {
                                        width: 23px;
                                        height: 23px;
                                        background: #25273c;
                                        top: 1px;
                                        left: 3px;

                                    }

                            }
                        }

                    }
    }

  /*//////////////////////////// respondive////////////////////////////// */
  @media (max-width: 768px) {
    .cross {
        display: block;
        height: 18px;
        width: 18px;
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%);
        background-image: url('./../assets/images/icon-cross.svg');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: 100;
        cursor: pointer;
    }
}
</style>
