export function validaDni(dni) {
    let valido = false;
    if (dni !== '') {
      if (dni !== 'admin') {
        valido = true;
      }
    }
  
    return valido;
  }
  
  export function validaCelular(celular){
    return parmRegex.CELULAR.test(celular);
  }
  
  export function validaCorreo(correo){
    return parmRegex.EMAIL.test(correo);
  }
  
  export function validaUbigeo(ubigeo) {
    let valido = false;
    if (/^[0-9]{6}$/.test(ubigeo)) {
      valido = true;
    }
    return valido;
  }
  
  export function validaFecha(fecha) {
    let valido = false;
    if (/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/.test(fecha)) {
      valido = true;
    }
    return valido;
  }
  
  export function validarDato(dato) {
    let valido = false;
    if(dato !== ''){
      valido = true;
    }
    return valido;
  }
  
  export function validaAlfa(texto){
    return /^[\sñáéíóúüa-z]+$/i.test(texto) ? true : false;
  }
  
  export function validaAlfaAll(texto){
  
    return parmRegex.ALPHANUMERIC_ALL.test(texto) ? true : false;
  }
  
  export function validaAlfaYPunto(texto) {
    return parmRegex.ALPHANUMERIC.test(texto) ? true : false;
  }
  
  export function validaAlfaNoPunto(texto){
    return parmRegex.ALPHANUMERIC_NO_POINT.test(texto) ? true : false;
  }
  
  export function soloEspacios(texto){
      return /^[\s]+$/.test(texto) ? true : false;
    
  }
  
  export function validaSoloNumeros(texto){
    return parmRegex.NUMERIC.test(texto) ? true : false;
  }
  
  export function validaFormatoDni(texto){
    return parmRegex.DNI.test(texto) ? true : false;
  }
  
  export function validaAlfaNoEspacios(texto){
    return parmRegex.ALPHANUMERIC_NO_SPACE.test(texto) ? true:false;
  }
  
  export function obtenerDiaActual(){
    let hoy = new Date();
    let dd = hoy.getDate() < 10 ? '0'+hoy.getDate() : hoy.getDate();
    let mm = (hoy.getMonth+1) < 10 ? '0'+(hoy.getMonth()+1) : (hoy.getMonth()+1);
    let yyyy = hoy.getFullYear() < 10 ? '0'+hoy.getFullYear() : hoy.getFullYear();
  
    return dd+'/'+mm+'/'+yyyy; 
  }
  
  export function validaKeyPress(input, funcionValidacion){
    if(input.value!=='' && !funcionValidacion(input.value)){
      let sel = input.selectionStart -1;
      input.value = input.defaultValue;
      input.selectionStart = sel;
      input.selectionEnd = sel;
      return false;
    }
    return true;
  }
  
  const parmRegex = {
    NUMERIC: /^[0-9]+$/,
    INTEGER: /^\-?[0-9]+$/,
    DECIMAL: /^\-?[0-9]*\.?[0-9]+$/,
    EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    CELULAR: /[9][0-9]{8}/,
    DNI: /^[0-9]{8}$/,
    ALPHA: /^[a-z]+$/i,
    ALPHANUMERIC_NO_SPACE: /^[ña-z0-9]+$/i,
    ALPHANUMERIC: /^[\sñáéíóúüa-z0-9.]+$/i,
    ALPHANUMERIC_NO_POINT: /^[\sña-z0-9]+$/i,
    ALPHANUMERIC_ALL: /^[\s°&,#ñáéíóúüa-z0-9.]+$/i,
    ALPHA_DASH: /^[a-z0-9_\-]+$/i,
    NUM_NATURAL: /^[0-9]+$/i,
    CODIGO_DISTRITO: /^[0-9]{6}-[0-9]{6}$/,
    NUM_NATURAL_NO_ZERO: /^[1-9][0-9]*$/i,
    IP: /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
    BASE64: /[^a-zA-Z0-9\/\+=]/i,
    NUMERIC_DASH: /^[\d\-\s]+$/,
    URL: /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    DATE_YYYY_MM_DD: /\d{4}-\d{1,2}-\d{1,2}/,
    DATA_DD_MM_YYYY: /\d{1,2}-\d{1,2}-\d{4}/
  }