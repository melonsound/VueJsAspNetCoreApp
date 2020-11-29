import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
    currentcount: number = 0;
    testcount: number = 1;

    incrementCounter() {
        this.currentcount++;
        this.testcount++;
    }
    /*testE() {
        this.testcount++;
    }*/
}
