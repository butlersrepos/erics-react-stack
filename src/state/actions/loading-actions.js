const LOADING = 'LOADING'
const DONE_LOADING = 'DONE_LOADING'

export { LOADING, DONE_LOADING }

export default message => ({
  type: LOADING,
  message
})
