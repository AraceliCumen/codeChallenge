export function validaCorreo(correo){
  return parmRegex.EMAIL.test(correo);
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