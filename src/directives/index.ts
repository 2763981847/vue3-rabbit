import {useIntersectionObserver} from "@vueuse/core";
import type {DirectiveBinding, Plugin} from "vue";

export const directivePlugin: Plugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el: HTMLImageElement, binding: DirectiveBinding<string>) {
                const {stop} = useIntersectionObserver(el, ([{isIntersecting}]) => {
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    },
                );
            }
        })
    }
}
