<template>
<keep-alive>
    <li class="todo-item">
        <div @click="removeTodo" class="cross"></div><input type="checkbox" :id="id" class="check-item" ><label @click="completingTodo"
            class="label" :for='id'>{{ todo
            }}</label>
    </li>
</keep-alive>

</template>
<script>

export default {
    props: ['id','done','todo'],

    methods: {
        completingTodo() {


            this.$store.dispatch('tDos/completingTodos', this.id)
        },
        removeTodo() {

            this.$store.dispatch('tDos/remove', this.id)
        }

    },

}
</script>
<style scoped>
.todo-item {
    position: relative;
    padding: 2rem;
    border-bottom: 1px solid hsl(233, 11%, 84%);
}

.todo-item:hover .cross {
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
}

.check-item:checked+label::after {
    background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));

    background-image: url('./../assets/images/icon-check.svg');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center center;

}

.check-item:checked+label::before {
    background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));

}

.check-item:checked+label {
    text-decoration: line-through;
    color: hsl(233, 11%, 84%);
}

.check-item+label {
    z-index: 3;
    cursor: pointer;
    padding-left: 48px;
    display: block;
    position: relative;
    height: 20px;
    line-height: 1.7em;
    color: hsl(233, 14%, 35%);
}

.check-item+label::before {
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

.check-item+label:hover:before {
    background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

.check-item+label::after {
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

/* ///////////////////dark mode//////////////// */
.container.dark .todo-item{
     border-color: hsl(233, 14%, 35%);
}
.container.dark .check-item:checked+label::after {
                            background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                            background-image: url('./../assets/images/icon-check.svg');
                            background-repeat: no-repeat;
                            background-size: auto;
                            background-position: center center;
                        }
.container.dark .check-item:checked+label::before {
                            background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));

                        }
.container.dark .check-item:checked+label {

                            color: hsl(233, 14%, 35%);
                        }
.container.dark .check-item+label {
                            color: #b3b4c0;
}

 .container.dark .check-item+label::before {
                                background: hsl(233, 14%, 35%);
                                width: 25px;
                                height: 25px;

                            }
 .container.dark .check-item+label:hover:before {
                                background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                            }
.container.dark .check-item+label:hover::after {
                                width: 21px;
                                height: 21px;
                                top: 2px;
                                left: 4px;

                            }
 .container.dark .check-item+label::after {
                                width: 23px;
                                height: 23px;
                                background: #25273c;
                                top: 1px;
                                left: 3px;

                            }
</style>
