resource "azurerm_role_assignment" "aks_acr_pull" {
  principal_id                     = module.aks.kubelet_identity_id
  role_definition_name             = "AcrPull"
  scope                            = module.acr.acr_id
  skip_service_principal_aad_check = true
}
