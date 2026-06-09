variable "resource_group_name" {
  type    = string
  default = "ecommerce-aks-rg"
}

variable "location" {
  type    = string
  default = "East US"
}

variable "vnet_name" {
  type    = string
  default = "ecommerce-vnet"
}

variable "address_space" {
  type    = list(string)
  default = ["10.0.0.0/16"]
}

variable "subnet_prefixes" {
  type    = list(string)
  default = ["10.0.1.0/24"]
}

variable "acr_name" {
  type    = string
  default = "ecommerceacrregistry"
}

variable "cluster_name" {
  type    = string
  default = "ecommerce-aks-cluster"
}

variable "dns_prefix" {
  type    = string
  default = "ecommerceaks"
}
