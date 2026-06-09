terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

module "networking" {
  source              = "./modules/networking"
  resource_group_name = var.resource_group_name
  location            = var.location
  vnet_name           = var.vnet_name
  address_space       = var.address_space
  subnet_prefixes     = var.subnet_prefixes
}

module "acr" {
  source              = "./modules/acr"
  resource_group_name = var.resource_group_name
  location            = var.location
  acr_name            = var.acr_name
}

module "aks" {
  source              = "./modules/aks"
  resource_group_name = var.resource_group_name
  location            = var.location
  cluster_name        = var.cluster_name
  dns_prefix          = var.dns_prefix
  vnet_subnet_id      = module.networking.aks_subnet_id
}
