import { Box } from '@chakra-ui/react'

/**
 * Компонент для отображения анимированной загрузки.
 * Он состоит из пяти кругов, движущихся вдоль оси X, создавая эффект вращения.
 *
 * @returns Компонент React, отображающий анимированную загрузку.
 */
const LoadingComponent = () => {
    return (
        <Box
            width={'100vw'}
            height={'50vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box
                width={'30%'}
                height={'30%'}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                    <circle fill="#A6A6A6" stroke="#A6A6A6" strokeWidth="6" r="6" cx="35" cy="100">
                        <animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35"
                                 keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin="0"></animate>
                    </circle>
                    <circle fill="#A6A6A6" stroke="#A6A6A6" strokeWidth="6" opacity=".8" r="6" cx="35" cy="100">
                        <animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35"
                                 keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite"
                                 begin="0.05"></animate>
                    </circle>
                    <circle fill="#A6A6A6" stroke="#A6A6A6" strokeWidth="6" opacity=".6" r="6" cx="35" cy="100">
                        <animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35"
                                 keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".1"></animate>
                    </circle>
                    <circle fill="#A6A6A6" stroke="#A6A6A6" strokeWidth="6" opacity=".4" r="6" cx="35" cy="100">
                        <animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35"
                                 keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite"
                                 begin=".15"></animate>
                    </circle>
                    <circle fill="#A6A6A6" stroke="#A6A6A6" strokeWidth="6" opacity=".2" r="6" cx="35" cy="100">
                        <animate attributeName="cx" calcMode="spline" dur="2" values="35;165;165;35;35"
                                 keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1" repeatCount="indefinite" begin=".2"></animate>
                    </circle>
                </svg>
            </Box>
        </Box>
    )
}

export default LoadingComponent