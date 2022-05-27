import * as C from './style'
import score from '../../images/score.svg'

export const ScoreUser = () => {
    return (
        <C.Container>
            <C.ImageContent>
                <C.Image src={score} />
            </C.ImageContent>
            <C.Content>
                <C.Heading>Fidelity <span>score</span></C.Heading>
            </C.Content>
        </C.Container>
    )
}