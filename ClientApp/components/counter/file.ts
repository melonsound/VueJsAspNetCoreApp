import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class FileT extends Vue {
    test(word: string) {
        return word;
    }
}