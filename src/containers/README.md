# Containers
Containers are _smart_ components which compose together a Presenter component with a `connect()` from `react-redux` which communicates how to take parts of the redux store and _inject_ them into the props of the wrapped Presenter.

- _smart_ because they are aware of the redux store and app state

## Common Container Structure
Most Container should be of the following form... for this example we're making a simple call-to-action component which will be provided with an `instruction` and an `onAction` prop.

```
import { connect } from 'react-redux'
import STEP_COMPLETED from '../../state/actions'
import Foo from '../presenters/Foo'

const mapStateToProps = state => ({
  instruction: state.currentStep.description
})

const mapDispatchToProps = dispatch => ({
  onAction: dispatch({ type: STEP_COMPLETED })
})

export default connect(mapStateToProps, mapDispatchToProps)(Foo)
```
