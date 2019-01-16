export const CONFIG_TOGGLE_VERIFIED_ONLY = 'CONFIG_TOGGLE_VERIFIED_ONLY';
export const CONFIG_TURN_OFF_VERIFIED_ONLY = 'CONFIG_TURN_OFF_VERIFIED_ONLY';
export const CONFIG_TOGGLE_DO_NOT_FOLLOW = 'CONFIG_TOGGLE_DO_NOT_FOLLOW';
export const CONFIG_TURN_OFF_DO_NOT_FOLLOW = 'CONFIG_TURN_OFF_DO_NOT_FOLLOW';
export const CONFIG_TOGGLE_HAVE_DEFAULT_INFORMATION = 'CONFIG_TOGGLE_HAVE_DEFAULT_INFORMATION';
export const CONFIG_TURN_OFF_HAVE_DEFAULT_INFORMATION = 'CONFIG_TURN_OFF_HAVE_DEFAULT_INFORMATION';
export const CONFIG_TOGGLE_CONTAINS_LINK = 'CONFIG_TOGGLE_CONTAINS_LINK';
export const CONFIG_TURN_OFF_CONTAINS_LINK = 'CONFIG_TURN_OFF_CONTAINS_LINK';
export const CONFIG_TOGGLE_TEXT_TRUNCATED = 'CONFIG_TOGGLE_TEXT_TRUNCATED';
export const CONFIG_TURN_OFF_TEXT_TRUNCATED = 'CONFIG_TURN_OFF_TEXT_TRUNCATED';

export function configToggleVerifiedOnly() {
  return {type: CONFIG_TOGGLE_VERIFIED_ONLY};
}

export function configTurnOffVerifiedOnly() {
  return {type: CONFIG_TURN_OFF_VERIFIED_ONLY};
}

export function configToggleDoNotFollow() {
  return {type: CONFIG_TOGGLE_DO_NOT_FOLLOW};
}

export function configTurnOffDoNotFollow() {
  return {type: CONFIG_TURN_OFF_DO_NOT_FOLLOW};
}


export function configToggleHaveDefaultInformation() {
  return {type: CONFIG_TOGGLE_HAVE_DEFAULT_INFORMATION};
}

export function configTurnOffHaveDefaultInformation() {
  return {type: CONFIG_TURN_OFF_HAVE_DEFAULT_INFORMATION};
}


export function configToggleContainsLink() {
  return {type: CONFIG_TOGGLE_CONTAINS_LINK};
}

export function configTurnOffContainsLink() {
  return {type: CONFIG_TURN_OFF_CONTAINS_LINK};
}


export function configToggleTextTruncated() {
  return {type: CONFIG_TOGGLE_TEXT_TRUNCATED};
}

export function configTurnOffTextTruncated() {
  return {type: CONFIG_TURN_OFF_TEXT_TRUNCATED};
}
